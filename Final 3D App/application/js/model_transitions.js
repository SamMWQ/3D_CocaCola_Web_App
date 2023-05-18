// Modified version of https://tympanus.net/codrops/2022/01/05/crafting-scroll-based-animations-in-three-js/
/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// Material
const material = new THREE.MeshToonMaterial({ color: "#cc2735" });

// Meshes
const mesh1 = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 16, 60), material);

scene.add(mesh1);

// Position of objects on the y-axis
const yPosition = 6;

// Position of objects apart from each other
const objectsDistance = 2.5;

mesh1.position.x = 1.5;
mesh1.position.y = yPosition;
mesh1.position.z = 6;

const targetPositions = [
  { x: 1.5, y: yPosition - objectsDistance * 0, z: 6 },
  { x: -1.5, y: yPosition - objectsDistance * 1 - 1, z: 8 },
  { x: 0, y: yPosition - objectsDistance * 2, z: 5 },
];

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
directionalLight.position.set(1, 1, 0); // 0 0 100
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: document.getElementById("models").clientHeight,
  absoluteHeight: document.getElementsByClassName("more-model-description")[0]
    .clientHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = document.getElementById("models").clientHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 35;
scene.add(camera);

/**
 * Scroll
 */
let scrollY = window.scrollY;

window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
});

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearAlpha(0);

/**
 * Easing functions
 */
const cubicInOut = (t) => {
  if (t < 0.5) {
    return 4 * t * t * t;
  } else {
    const f = 2 * t - 2;
    return 0.5 * f * f * f + 1;
  }
};

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Animate rotation of meshes
  mesh1.rotation.x = elapsedTime * 0.1;
  mesh1.rotation.y = elapsedTime * 0.12;

  // Animate position of mesh1 based on scroll
  const progress = scrollY / sizes.absoluteHeight / 2;
  const index = Math.floor(progress * 2);
  const target = targetPositions[index];
  const nextTarget = targetPositions[index + 1];

  if (target && nextTarget) {
    const interpolationFactor = cubicInOut(progress * 2 - index);

    mesh1.position.x = THREE.MathUtils.lerp(
      target.x,
      nextTarget.x,
      interpolationFactor
    );
    mesh1.position.y = THREE.MathUtils.lerp(
      target.y,
      nextTarget.y,
      interpolationFactor
    );
    mesh1.position.z = THREE.MathUtils.lerp(
      target.z,
      nextTarget.z,
      interpolationFactor
    );
  }

  // Animate camera
  camera.position.y = (-scrollY / sizes.absoluteHeight) * objectsDistance;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

// Interactive page
function handleFindOutMore() {
  const moreModelDescription = document.querySelector(
    ".more-model-description"
  );
  const duration = 1000; // Adjust the duration (in milliseconds) to control the scrolling speed
  const targetPosition = moreModelDescription.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTimestamp = null;

  function scrollTo(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;
    const easing = progress / duration;
    const scrollToPosition = startPosition + distance * easing;

    window.scrollTo(0, scrollToPosition);

    if (progress < duration) {
      window.requestAnimationFrame(scrollTo);
    }
  }

  window.requestAnimationFrame(scrollTo);

  // Prevent the default anchor link behaviour
  event.preventDefault();
}

function handleGoToModel() {
  const modelDisplaySection = document.querySelector(".model-display");
  const duration = 1000; // Adjust the duration (in milliseconds) to control the scrolling speed
  const targetPosition = modelDisplaySection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTimestamp = null;

  function scrollTo(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;
    const easing = progress / duration;
    const scrollToPosition = startPosition + distance * easing;

    window.scrollTo(0, scrollToPosition);

    if (progress < duration) {
      window.requestAnimationFrame(scrollTo);
    }
  }

  window.requestAnimationFrame(scrollTo);

  // Prevent the default button behaviour
  event.preventDefault();
}

// Add event listener to the "Find out more" link
const findOutMoreLink = document.querySelector(".model-page-link");
findOutMoreLink.addEventListener("click", handleFindOutMore);

// Add event listener to the "Go to model" button
const goToModelButton = document.querySelector(".go-to-model-button");
goToModelButton.addEventListener("click", handleGoToModel);

// Display interactive model
const modelDisplaySection = document.querySelector(".model-display");
const model3DElement = document.querySelector(".model3D");
const modelShowButton = document.querySelector(".model-show-button");
const tripleColumn = document.querySelector("#tripleColumn");

modelShowButton.addEventListener("click", function () {
  if (model3DElement.classList.contains("expanded")) {
    // Collapse the model3D element
    model3DElement.classList.remove("expanded");
    modelShowButton.textContent = "View";
    tripleColumn.style.display = "none"; // Hide the triple column
  } else {
    // Expand the model3D element
    model3DElement.classList.add("expanded");
    modelShowButton.textContent = "Hide";
    tripleColumn.style.display = "flex"; // Show the triple column
  }
});

$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});

// Function to change the material colour
function changeMaterialColor(color) {
  material.color.set(color);
}

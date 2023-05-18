<?php
include './debug/ChromePhp.php';
ChromePhp::log('controller.php: Hello world');
ChromePhp::log($_SERVER);

// Create the controller class for the MVC design pattern
class Controller
{
    // Declare public variables for the controller class
    public $load;
    public $model;

    // Create functions for the controller class
    function __construct($pageURI = null)
    { // constructor of the class
        // Debugging statement
        //echo "pageURI in controller: $pageURI<br>";
        // Create new objects for Load and Model
        $this->load = new Load();
        $this->model = new Model();
        // Determine what page you are on
        $this->$pageURI();
    }
    // Home page function
    function home()
    {
        // Get data from the defined model method - model3D_info()
        $data = $this->model->model3D_info();
        // Tell the loader what view to load and which data to use
        //$this -> load -> view('view3DAppTest_2', $data);
        $this->load->view('cocaCola', $data);
    }

    function apiCreateTable()
    {
        // echo "Create table function";
        $data = $this->model->dbCreateTable();
        $this->load->view('viewMessage', $data);
    }

    function apiInsertData()
    {
        $data = $this->model->dbInsertData();
        $this->load->view('viewMessage', $data);
    }

    function apiGetData()
    {
        $data = $this->model->dbGetData();
        $this->load->view('view3DAppTest_2', $data);
    }

    function dbCreateTable()
    {
        echo "Create table function";
    }

    function dbInsertData()
    {
        echo "Data insertion function";
    }

    function dbGetData()
    {
        echo "Data retrieval function";
    }

    // New methods for Part C of Lab 8 Tutorial, which use AJAX

    // API call to read JSON data from a JSON file
    function apiGetJson()
    {
        $this->load->view('viewJson');
    }

    // API call to select 3D images
    function apiLoadImage()
    {
        // Get the brand data from the (this) Model using the dbGetBrand() method in this Model class
        ChromePhp::warn('controller.php: [apiLoadImage] Get the brand data');
        $data = $this->model->dbGetBrand();
        // Note, the viewDrinks.php view being loaded here calls a new model
        // called modelDrinkDetails.php, which is not part of the Model class
        // It is a separate model illustrating that you can have many models
        ChromePhp::log($data);
        $this->load->view('viewDrinks', $data);
    }
}
?>
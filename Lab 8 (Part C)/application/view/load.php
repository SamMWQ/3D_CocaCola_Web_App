<?php
class Load {
    // Defaults to constructor as no specific constructor is defined
    function view($file_name, $data = null) {
        // Check for data
        if (is_array($data)) {
            extract($data);
        }

        // Concatenate the view file with .php extension to include the view as a PHP file
        include $file_name . '.php';
    }
}
?>
<?php
// Create the controller class for the MVC design pattern
class Controller {
    // Declare public variables for the controller class
    public $load;
    public $model;

    // Create functions for the controller class
    function __construct($pageURI = null) { // constructor of the class
        // Create new objects for Load and Model
        $this -> load = new Load();
        $this -> model = new Model();
        // Determine what page you are on
        $this -> $pageURI();
    }
    // Home page function
    function home() {
        // Get data from the defined model method - model3D_info()
        $data = $this -> model -> model3D_info();
        // Tell the loader what view to load and which data to use
        $this -> load -> view('view3DAppTest_2', $data);
    }

    function apiCreateTable() {
        // echo "Create table function";
        $data = $this -> model -> dbCreateTable();
        $this -> load -> view('viewMessage', $data);
    }

    function apiInsertData() {
        $data = $this -> model -> dbInsertData();
        $this -> load -> view('viewMessage', $data);
    }

    function apiGetData() {
        $data = $this -> model -> dbGetData();
        $this -> load -> view('view3DAppData', $data);
    }

    function dbCreateTable() {
        echo "Create table function";
    }

    function dbInsertData() {
        echo "Data insertion function";
    }

    function dbGetData() {
        echo "Data retrieval function";
    }
}
?>
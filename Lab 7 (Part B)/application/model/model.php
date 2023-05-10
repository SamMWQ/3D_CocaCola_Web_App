<?php
class Model {
    // Property declaration, in this case we are declaring a variable or handler that points to the database connection, this will become a PDO object
    public $dbhandle;

    // Method to create database connection using PHP Data Objects (PDO) as the interface to SQLite
    public function __construct() {
        // Set up the database source name (DSN)
        $dsn = 'sqlite:./db/test1.db';

        // Then create a connection to a database with the PDO() function
        try {
            // Change connection string for different databases, currently using SQLite
            $this -> dbhandle = new PDO($dsn, 'user', 'password', array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false,
            ));
            // $this -> dbhandle -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo 'Database connection created</br></br>;
        } catch (PDOException $e) {
            echo "I'm sorry, sm2083, I'm afraid I can't connect to the database!";
            // Generate an error message if the connection fails
            print new Exception($e -> getMessage());
        }
    }

    public function dbCreateTable() {
        try {
            $this -> dbhandle -> exec("CREATE TABLE Model_3D (Id INTEGER PRIMARY KEY, x3dModelTitle TEXT, x3dCreationMethod TEXT, modelTitle TEXT, modelSubtitle TEXT, modelDescription TEXT)");
            return "Model_3D table is succesfully created inside test1.db file";
        } catch (PDOException $e) {
            // Generate an error message
            print new Exception($e -> getMessage());
        }
        $this -> dbhandle = NULL;
    }

    public function dbInsertData() {
        try {
            $this -> dbhandle -> exec("INSERT INTO Model_3D (Id, x3dModelTitle, x3dCreationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (1, 'string_1', 'string_2', 'string_3', 'string_4', 'string_5'); " . "INSERT INTO Model_3D (Id, x3dModelTitle, x3dCreationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (2, 'string_1', 'string_2', 'string_3', 'string_4', 'string_5'); " . "INSERT INTO Model_3D (Id, x3dModelTitle, x3dCreationMethod, modelTitle, modelSubtitle, modelDescription) VALUES (3, 'string_1', 'string_2', 'string_3', 'string_4', 'string_5'); ");
            return "X3D model data inserted succesfully inside test1.db file";
        } catch (PDOException $e) {
            echo "I'm sorry, sm2083, I'm afraid I can't connect to the database!";
            // Generate an error message if the connection fails
            print new Exception($e -> getMessage());
        }
        $this -> dbhandle = NULL;
    }

    public function dbGetData() {
        try {
            // Prepare a statement to get all records from the Model_3D table
            $sql = 'SELECT * FROM Model_3D';
            // Use PDO query() to query the database with the prepared SQL statement
            $stmt = $this -> dbhandle -> query($sql);
            // Set up an array to return the results to the view
            $result = null;
            // Set up a variable to index each row of the array
            $i = -0;
            // Use PDO fetch() to retrieve the results from the database using a while loop
            // Use a while loop to loop through the rows
            while ($data = $stmt -> fetch()) {
                // Don't worry about this, it's just a simple test to check we can ouput a value from the database in a while loop
                // echo '</br>' . $data['x3dModelTitle'];
                // Write the database contents to the results array for sending back to the view
                $result[$i]['x3dModelTitle'] = $data['x3dModelTitle'];
                $result[$i]['x3dCreationMethod'] = $data['x3dCreationMethod'];
                $result[$i]['modelTitle'] = $data['modelTitle'];
                $result[$i]['modelSubtitle'] = $data['modelSubtitle'];
                $result[$i]['modelDescription'] = $data['modelDescription'];
                // Increment the row index
                $i++;
            }
        } catch (PDOException $e) {
            // Generate an error message
            print new Exception($e -> getMessage());
        }
        // Close the database connection
        $this -> dbhandle = NULL;
        // Send the response back to the view
        return $result;
    }

    // Method to simulate the model data
    public function model3D_info() {
        // Simulate the model's data
        return array(
            'model_1' => 'Coke Can 3D Image 1',
            'image3D_1' => '1_Cola-bottles',

            'model_2' => 'Coke Can 3D Image 2',
            'image3D_2' => '12657920-1004899320680641',
            
            'model_3' => 'Sprite Bottle 3D Image 1',
            'image3D_3' => '5449000058386_0_XL',
            
            'model_4' => 'Sprite Bottle 3D Image 2',
            'image3D_4' => 'Coca-Cola-focus-on-still-beverages-pays-off-in-Q4-soda-sales-slides',
            
            'model_5' => 'Dr Pepper Cup 3D Image 1',
            'model_6' => 'Dr Pepper Cup 3D Image 2'
        );
    }
}
?>
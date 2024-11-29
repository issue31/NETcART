package com.ecom.netcart.controller;

// Importing necessary libraries and frameworks for building the CategoryController.
import java.util.List; // Used to handle lists of objects, such as category models.

import org.slf4j.Logger; // Provides logging capabilities for debugging and tracking.
import org.slf4j.LoggerFactory; // Factory class to create logger instances.

import org.springframework.beans.factory.annotation.Autowired; // Enables dependency injection for the service layer.
import org.springframework.http.HttpStatus; // Represents HTTP status codes for API responses.
import org.springframework.http.ResponseEntity; // Wraps API responses with body and status code.

import org.springframework.web.bind.annotation.CrossOrigin; // Allows cross-origin requests for the controller.
import org.springframework.web.bind.annotation.GetMapping; // Maps HTTP GET requests to specific methods.
import org.springframework.web.bind.annotation.RequestParam; // Binds query parameters to method arguments.
import org.springframework.web.bind.annotation.RestController; // Marks the class as a RESTful controller.

import com.ecom.netcart.exception.CategoryNotFoundException; // Custom exception for handling missing categories.
import com.ecom.netcart.model.CategoryOutputModel; // Represents the output structure for category data.
import com.ecom.netcart.service.CategoryServiceImpl; // Service implementation containing business logic.

/**
 * The CategoryController class is responsible for handling HTTP requests 
 * related to product categories in the NetCart application. It defines endpoints 
 * to fetch information about categories by name or retrieve all categories.
 * 
 * Key Features:
 * - Integration with CategoryServiceImpl for business logic.
 * - Uses SLF4J for logging.
 * - Enables CORS to allow requests from any domain.
 * 
 * This controller is part of the e-commerce backend system and provides 
 * RESTful API support for interacting with product categories.
 * 
 * Author: [Your Name]
 */
@RestController // Marks this class as a REST controller to handle HTTP requests.
@CrossOrigin("*") // Allows requests from all origins, useful for cross-domain frontend integration.
public class CategoryController {

    /**
     * Autowires the CategoryServiceImpl, which contains the business logic
     * for retrieving category information.
     */
    @Autowired
    CategoryServiceImpl categoryService;

    /**
     * SLF4J Logger for recording information about the flow of requests and responses.
     */
    Logger logger = LoggerFactory.getLogger(CategoryController.class);

    /**
     * Handles GET requests to fetch details of a specific category by its name.
     * 
     * Endpoint: `/category`
     * 
     * @param name The name of the category to retrieve.
     * @return ResponseEntity containing the category details and HTTP status.
     * @throws CategoryNotFoundException If the requested category does not exist.
     */
    @GetMapping("/category") // Maps HTTP GET requests to this method.
    public ResponseEntity<CategoryOutputModel> getCategoryByName(@RequestParam String name) throws CategoryNotFoundException {
        logger.info("getCategoryByName() method started"); // Log start of method execution.
        
        // Call the service to fetch category details by name.
        CategoryOutputModel categoryOutputModel = categoryService.getCategoryByName(name);
        
        // Log the retrieved category details for debugging purposes.
        logger.info("Category details retrieved: {}", categoryOutputModel);
        logger.info("getCategoryByName() method ended"); // Log the end of method execution.
        
        // Return the category details wrapped in a ResponseEntity with HTTP 200 (OK) status.
        return new ResponseEntity<>(categoryOutputModel, HttpStatus.OK);
    }

    /**
     * Handles GET requests to fetch a list of all available categories.
     * 
     * Endpoint: `/getallcategory`
     * 
     * @return ResponseEntity containing a list of all categories and HTTP status.
     */
    @GetMapping("/getallcategory") // Maps HTTP GET requests to this method.
    public ResponseEntity<List<CategoryOutputModel>> getAllCategories() {
        logger.info("getAllCategories() method started"); // Log the start of method execution.
        
        // Call the service to retrieve all categories.
        List<CategoryOutputModel> categoryOutputModels = categoryService.getAllCategories();
        
        // Log the retrieved list of categories for debugging purposes.
        logger.info("All categories retrieved: {}", categoryOutputModels);
        logger.info("getAllCategories() method ended"); // Log the end of method execution.
        
        // Return the list of categories wrapped in a ResponseEntity with HTTP 200 (OK) status.
        return new ResponseEntity<>(categoryOutputModels, HttpStatus.OK);
    }
}

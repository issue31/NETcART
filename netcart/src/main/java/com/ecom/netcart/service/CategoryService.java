package com.ecom.netcart.service;

// Importing necessary classes and interfaces
import java.util.ArrayList;
import java.util.List;

// Importing Spring framework annotations
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// Importing entity classes
import com.ecom.netcart.entity.Category;

// Importing custom exception classes
import com.ecom.netcart.exception.CategoryNotFoundException;
import com.ecom.netcart.exception.ProductNotFoundException;

// Importing model classes
import com.ecom.netcart.model.CategoryOutputModel;
import com.ecom.netcart.model.ProductOutputModel;

// Importing repository interface
import com.ecom.netcart.repository.CategoryDao;

@Service
public interface CategoryService {
    // Retrieves a category by its name and returns its details
    public CategoryOutputModel getCategoryByName(String name) throws CategoryNotFoundException;
    
    // Retrieves a list of all categories and returns their details
    public List<CategoryOutputModel> getAllCategories();
}

/*
 * This interface defines the service layer for Category-related operations.
 * It includes methods to fetch a category by its name and to fetch all categories.
 * 
 * Methods:
 * - getCategoryByName: Takes a category name as input and returns the corresponding CategoryOutputModel.
 *   Throws CategoryNotFoundException if the category is not found.
 * - getAllCategories: Returns a list of CategoryOutputModel for all categories available in the system.
 * 
 * Exceptions:
 * - CategoryNotFoundException: Thrown when a category with the specified name does not exist.
 * - ProductNotFoundException: Thrown when a product related to the category is not found (though not used in this interface, it might be relevant in the implementation).
 */

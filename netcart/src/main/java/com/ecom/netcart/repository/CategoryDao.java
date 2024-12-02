package com.ecom.netcart.repository; // Package declaration

import org.springframework.data.jpa.repository.JpaRepository; // Importing JpaRepository interface from Spring Data JPA
import org.springframework.data.jpa.repository.Query; // Importing Query annotation from Spring Data JPA

import com.ecom.netcart.entity.Category; // Importing Category entity

/**
 * Repository interface for Category entity.
 * Extends JpaRepository to provide CRUD operations and custom query methods.
 */
public interface CategoryDao extends JpaRepository<Category, Integer> {

    /**
     * Custom query method to find a Category by its title.
     * Uses JPQL (Java Persistence Query Language) to define the query.
     *
     * @param name the title of the category to search for
     * @return the Category entity with the specified title
     */
    @Query("select c from Category c where c.categoryTitle = :name") // JPQL query to find a category by its title
    Category findByName(String name); // Method to execute the custom query
}

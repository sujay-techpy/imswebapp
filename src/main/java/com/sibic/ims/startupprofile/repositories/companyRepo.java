package com.sibic.ims.startupprofile.repositories;

import com.sibic.ims.startupprofile.entity.AddCompany;
import org.springframework.data.jpa.repository.JpaRepository;

public interface companyRepo extends JpaRepository<AddCompany, Long> {
    // You can define custom query methods here if needed
    // Example:
    // List<Company> findByCompanyName(String companyName);
}
package com.sibic.ims.startupprofile.services;

import com.sibic.ims.startupprofile.entity.AddCompany;

import java.util.List;

public interface CompanyService {
    List<AddCompany> getAllCompanies();
    AddCompany getCompanyById(Long id);
    AddCompany saveCompany(AddCompany company);
    void deleteCompany(Long id);
}
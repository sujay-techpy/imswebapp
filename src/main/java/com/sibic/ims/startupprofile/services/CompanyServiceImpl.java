package com.sibic.ims.startupprofile.services;

import com.sibic.ims.startupprofile.entity.AddCompany;
import com.sibic.ims.startupprofile.repositories.companyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private companyRepo companyRepo;

    @Override
    public List<AddCompany> getAllCompanies() {
        return companyRepo.findAll();
    }

    @Override
    public AddCompany getCompanyById(Long id) {
        return companyRepo.findById(id).orElse(null);
    }

    @Override
    public AddCompany saveCompany(AddCompany company) {
        return companyRepo.save(company);
    }

    @Override
    public void deleteCompany(Long id) {
        companyRepo.deleteById(id);
    }
}
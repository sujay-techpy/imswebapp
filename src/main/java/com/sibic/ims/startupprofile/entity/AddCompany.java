package com.sibic.ims.startupprofile.entity;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;


import java.util.Date;

@Entity
@Table(name = "companies")
public class AddCompany {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "company_email")
    private String companyEmail;

    @Column(name = "company_linkedin_profile")
    private String companyUrl;

    @Column(name = "founder_name")
    private String founderName;

    @Column(name = "founder_email")
    private String founderEmail;

    @Column(name = "founder_phone_no")
    private String founderPhoneNo;

    @Column(name = "dpiit_no")
    private String dpiitNo;

    @Column(name = "company_address")
    private String companyAddress;

    @Column(name = "city")
    private String city;

    @Column(name = "sector")
    private String sector;

    @Column(name = "sub_sector")
    private String subSector;

    @Column(name = "funding_requirement")
    private String fundingRequirement;

    @Column(name = "funding_amount")
    private String fundingAmount;

    @Column(name = "office_space_req")
    private String workingSpace;

    @Column(name = "entrepreneurial_sub_spt")
    private String subscription;

    @Column(name="subscriptionDuration")
    private String subscriptionDuration;

    @Column(name = "upload_logo")
    private String  companyLogo;

    @Column(name = "cofounder_name")
    private String coFounderName;

    @Column(name = "cofounder_email")
    private String coFounderEmail;

    @Column(name = "cofounder_phone_no")
    private String coFounderPhoneNo;

    @Column(name = "employee_name")
    private String employeeName;

    @Column(name = "designation")
    private String designation;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "joining_date")
    private Date joiningDate;

    @Column(name = "doc_name")
    private String documentName;

    @Column(name = "upload_doc")
    private String document;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyEmail() {
        return companyEmail;
    }

    public void setCompanyEmail(String companyEmail) {
        this.companyEmail = companyEmail;
    }

    public String getCompanyUrl() {
        return companyUrl;
    }

    public void setCompanyUrl(String companyUrl) {
        this.companyUrl = companyUrl;
    }

    public String getFounderName() {
        return founderName;
    }

    public void setFounderName(String founderName) {
        this.founderName = founderName;
    }

    public String getFounderEmail() {
        return founderEmail;
    }

    public void setFounderEmail(String founderEmail) {
        this.founderEmail = founderEmail;
    }

    public String getFounderPhoneNo() {
        return founderPhoneNo;
    }

    public void setFounderPhoneNo(String founderPhoneNo) {
        this.founderPhoneNo = founderPhoneNo;
    }

    public String getDpiitNo() {
        return dpiitNo;
    }

    public void setDpiitNo(String dpiitNo) {
        this.dpiitNo = dpiitNo;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getSubSector() {
        return subSector;
    }

    public void setSubSector(String subSector) {
        this.subSector = subSector;
    }

    public String getFundingRequirement() {
        return fundingRequirement;
    }

    public void setFundingRequirement(String fundingRequirement) {
        this.fundingRequirement = fundingRequirement;
    }

    public String getFundingAmount() {
        return fundingAmount;
    }

    public void setFundingAmount(String fundingAmount) {
        this.fundingAmount = fundingAmount;
    }

    public String getWorkingSpace() {
        return workingSpace;
    }

    public void setWorkingSpace(String workingSpace) {
        this.workingSpace = workingSpace;
    }

    public String getSubscription() {
        return subscription;
    }

    public void setSubscription(String subscription) {
        this.subscription = subscription;
    }

    public String getSubscriptionDuration() {
        return subscriptionDuration;
    }

    public void setSubscriptionDuration(String subscriptionDuration) {
        this.subscriptionDuration = subscriptionDuration;
    }

    public String getCompanyLogo() {
        return companyLogo;
    }

    public void setCompanyLogo(String companyLogo) {
        this.companyLogo = companyLogo;
    }

    public String getCoFounderName() {
        return coFounderName;
    }

    public void setCoFounderName(String coFounderName) {
        this.coFounderName = coFounderName;
    }

    public String getCoFounderEmail() {
        return coFounderEmail;
    }

    public void setCoFounderEmail(String coFounderEmail) {
        this.coFounderEmail = coFounderEmail;
    }

    public String getCoFounderPhoneNo() {
        return coFounderPhoneNo;
    }

    public void setCoFounderPhoneNo(String coFounderPhoneNo) {
        this.coFounderPhoneNo = coFounderPhoneNo;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public Date getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(Date joiningDate) {
        this.joiningDate = joiningDate;
    }

    public String getDocumentName() {
        return documentName;
    }

    public void setDocumentName(String documentName) {
        this.documentName = documentName;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }
}
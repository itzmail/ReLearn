package com.itzmail.co.belajarspringrestfulapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "addresses")
public class Address {

        @Id
        private String id;

        private String street;

        private String city;

        private String province;

        @Column(name = "postal_code")
        private String postalCode;

        private String country;

        @ManyToOne
        @JoinColumn(name = "contact_id", referencedColumnName = "id")
        private Contact contact;

}

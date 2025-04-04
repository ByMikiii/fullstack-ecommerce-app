package com.bymikiii.fullstack_v2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Discount {
    private String code;
    private double value;
    // if true -> value is % | else -> value is fixed
    private boolean percentage;
    private double minPrice;
    private boolean active;

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public double getValue() {
        return this.value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public boolean isPercentage() {
        return this.percentage;
    }

    public boolean getPercentage() {
        return this.percentage;
    }

    public void setPercentage(boolean percentage) {
        this.percentage = percentage;
    }

    public double getMinPrice() {
        return this.minPrice;
    }

    public void setMinPrice(double minPrice) {
        this.minPrice = minPrice;
    }

    public boolean isActive() {
        return this.active;
    }

    public boolean getActive() {
        return this.active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}

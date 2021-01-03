import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/Forms/AppFormField";
import AppForm from "../components/Forms/AppForm";
import AppFormPicker from "../components/Forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

export default function ListingEditScreen({ items }) {
  //Handle Post Item
  const handlePost = ({ values }) => {
    console.log("NEW ITEM IS:", values);
  };

  const listingSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "Title must be at least 3 characters.")
      .max(255, "Max length is 255 characters")
      .required("Title is required."),
    price: Yup.string().required("Price is required.").max(100000),
    category: Yup.object()
      .required("Category is required.")
      .nullable()
      .label("Category"),
    description: Yup.string()
      .min(4, "Description must be at least 4 characters.")
      .required("Description is required."),
  });

  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <AppForm
        initialValues={{ description: "", title: "", price: "" }}
        onSubmit={(values) => console.log(values)}
        validateOnBlur
        validationSchema={listingSchema}
      >
        <AppFormField
          autoCorrect={false}
          name="title"
          placeholder="Tile"
          maxLength={255}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          width={120}
          keyboardType="numeric"
        />
        <AppFormPicker
          name="category"
          numberOfColumns={3}
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="Description"
          numberOfLines={3}
          multiLine
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});

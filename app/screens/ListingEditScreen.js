import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/Forms/AppFormField";
import AppForm from "../components/Forms/AppForm";
import AppFormPicker from "../components/Forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/Forms/FormImagePicker";

import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const FormField = AppFormField;
const Form = AppForm;
const FormPicker = AppFormPicker;

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
  images: Yup.array().min(1, "Please select at least one image."),
});

export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  //Handle Post Item
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      alert("Error saving listing. " + JSON.stringify(result.data.error));
    }
    resetForm();
    setUploadVisible(false);
  };

  return (
    <Screen style={{ paddingHorizontal: 10, marginBottom: 20 }}>
      <ScrollView>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <Form
          initialValues={{
            description: "",
            title: "",
            price: "",
            category: null,
            images: [],
          }}
          onSubmit={(values, formik) => handleSubmit(values, formik)}
          validateOnBlur
          validationSchema={listingSchema}
        >
          <FormImagePicker name="images" />
          <FormField
            autoCorrect={false}
            name="title"
            placeholder="Tile"
            maxLength={255}
          />
          <FormField
            name="price"
            placeholder="Price"
            width={120}
            keyboardType="numeric"
          />
          <FormPicker
            name="category"
            numberOfColumns={3}
            items={categories}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            width="50%"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="description"
            placeholder="Description"
            numberOfLines={3}
            multiLine
          />
          <SubmitButton title="Post" />
        </Form>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});

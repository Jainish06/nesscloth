import { options } from "joi";

export const navOptions = [
  {
    id: "listing",
    label: "All Products",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Men",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Women",
    path: "/product/listing/women",
  },
  {
    id: "about",
    label: "About",
    path: "/about",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Products",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Add New Product",
    path: "/admin-view/add-product",
  },
];



export const registrationFormControls = [
  {
    id : 'name',
    type : 'text',
    palceholder : 'Enter your name.',
    label : 'Name',
    componentType : 'input'
  },
  {
    id : 'email',
    type : 'email',
    palceholder : 'Enter your Email.',
    label : 'Email',
    componentType : 'input'
  },
  {
    id : 'password',
    type : 'password',
    palceholder : 'Enter password.',
    label : 'Password',
    componentType : 'input'
  },
  {
    id : 'role',
    type : '',
    palceholder : '',
    label : 'Role',
    componentType : 'select',
    options: [
      {
        id : 'admin',
        label : 'Admin'
      },
      {
        id : 'customer',
        label : 'Customer'
      }
    ]
  }
]

import { options } from "joi";

export const navOptions = [
  {
    id: "listing",
    label: "All Products",
    path: "/product/listings/all-products",
  },
  {
    id: "listingMen",
    label: "Men",
    path: "/product/listings/men",
  },
  {
    id: "listingWomen",
    label: "Women",
    path: "/product/listings/women",
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
    path: "/admin-view/add-products",
  },
];

export const registrationFormControls = [
  {
    id : 'name',
    type : 'text',
    placeholder : 'Enter your name.',
    label : 'Name',
    componentType : 'input'
  },
  {
    id : 'email',
    type : 'email',
    placeholder : 'Enter your Email.',
    label : 'Email',
    componentType : 'input'
  },
  {
    id : 'password',
    type : 'password',
    placeholder : 'Enter password.',
    label : 'Password',
    componentType : 'input'
  },
  {
    id : 'role',
    type : '',
    placeholder : '',
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

export const loginFormControls = [
  {
    id : 'email',
    type : 'email',
    placeholder : 'Enter your Email.',
    label : 'Email',
    componentType : 'input'
  },
  {
    id : 'password',
    type : 'password',
    placeholder : 'Enter password.',
    label : 'Password',
    componentType : 'input'
  },
]

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Men",
      },
      {
        id: "women",
        label: "Women",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Delivery Info",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCRHHUsmYiwo8qKBx_YW2abJcXGuZOVNR8",
  authDomain: "nesscloth.firebaseapp.com",
  projectId: "nesscloth",
  storageBucket: "nesscloth.appspot.com",
  messagingSenderId: "132532117258",
  appId: "1:132532117258:web:a533606c089b6272c8a4f3",
  measurementId: "G-J0XBWXM988"
};

export const firebaseStorageURL = 'gs://nesscloth.appspot.com'

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];

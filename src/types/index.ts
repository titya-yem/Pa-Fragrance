import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface NavBarList {
  name: string;
  href: string;
}

export interface dataType {
  id: number;
  img: StaticImageData;
  name: string;
  price: number;
  infoBrand: string;
  infoText: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export interface FooterInfo {
  id: number;
  icon: ReactNode;
  href?: string;
  content: string;
}

export interface ContactFormData {
  email: string;
  message: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

export type CardPaymentFormData = {
  cardNumber: string;
  nameOnCard: string;
  expiryDate: string;
  securityCode: string;
};

export interface DashboardList {
  icon: ReactNode;
  name: string;
  href: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

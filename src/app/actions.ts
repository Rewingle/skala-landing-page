"use server";

import { budgets, projectTypes } from "@/content/options";

type InquiryField = "name" | "email" | "projectType" | "budget" | "message";

export type InquiryState = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: Partial<Record<InquiryField, string>>;
  values?: Partial<Record<InquiryField, string>>;
};

export type SubscribeState = {
  status: "idle" | "error" | "success";
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(formData: FormData, key: string, maxLength: number) {
  return String(formData.get(key) ?? "").trim().slice(0, maxLength);
}

export async function submitInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const values = {
    name: readText(formData, "name", 120),
    email: readText(formData, "email", 254),
    projectType: readText(formData, "projectType", 60),
    budget: readText(formData, "budget", 60),
    message: readText(formData, "message", 2000),
  };

  const errors: NonNullable<InquiryState["errors"]> = {};
  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!(projectTypes as readonly string[]).includes(values.projectType)) {
    errors.projectType = "Please choose a project type.";
  }
  if (values.budget && !(budgets as readonly string[]).includes(values.budget)) {
    errors.budget = "Please choose a budget range.";
  }
  if (values.message.length < 10) {
    errors.message = "A sentence or two about your space helps us prepare.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  // TODO: deliver the enquiry (email provider or CRM). Logged on the server for now.
  console.log("[skala] new enquiry", values);

  const firstName = values.name.split(/\s+/)[0];
  return {
    status: "success",
    message: `Thank you, ${firstName}. We’ll be in touch within two working days to arrange a first conversation.`,
  };
}

export async function subscribe(
  _previous: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const email = readText(formData, "email", 254);
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: add the address to the mailing-list provider. Logged on the server for now.
  console.log("[skala] newsletter sign-up", email);
  return { status: "success", message: "Thank you — you’re on the list." };
}

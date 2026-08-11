"use client";
import ProfileImage from "@/components/molecules/ProfileImage";
import { profileSchema } from "@/validation/profileSchema";
import { Form, Formik } from "formik";
import Text from "@/components/atoms/Text";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";
import type { Profile } from "@/types/profile";
import { useProfileForm } from "@/hooks/profile/useProfileForm";

interface ProfileFormProps {
  profileData: Profile;
}

export default function ProfileForm({ profileData }: ProfileFormProps) {
  const {
    user,
    initialValues,
    isEditing,
    isPending,
    handleEditClick,
    handleSubmit,
  } = useProfileForm(profileData);

  return (
    <section className="custom-container flex flex-col items-center gap-8 md:gap-12 mb-20 md:mb-25">
      <ProfileImage avatarSrc={user.image} name={user.name} />

      <Formik
        initialValues={initialValues}
        validationSchema={profileSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full max-w-lg">
          <div className="rounded-lg bg-surface p-6 md:p-10">
            <Text
              as="h2"
              size="lg"
              weight="semibold"
              className="text-center mb-6 md:mb-8"
            >
              General information
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4.5">
              <FormField
                name="first_name"
                label="First Name"
                type="text"
                placeholder="John"
                disabled={!isEditing}
              />
              <FormField
                name="last_name"
                label="Last Name"
                type="text"
                placeholder="Smith"
                disabled={!isEditing}
              />
            </div>

            <div className="flex flex-col gap-3.5 md:gap-4.5 mt-3.5 md:mt-4.5">
              <FormField
                name="email"
                label="Email"
                type="email"
                placeholder="example@gmail.com"
                disabled={!isEditing}
              />
              <FormField
                name="phone"
                label="Phone number"
                type="tel"
                placeholder="123456789"
                disabled={!isEditing}
              />
              <FormField
                name="address"
                label="Address"
                type="text"
                placeholder="Maadi, Cairo, Egypt."
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="flex justify-center">
            {isEditing ? (
              <Button
                type="submit"
                isLoading={isPending}
                variant="primary"
                size="md"
                className="w-fit! mt-8 md:mt-10"
              >
                Save changes
              </Button>
            ) : (
              <Button
                type="button"
                variant="primary"
                size="md"
                className="w-fit! mt-8 md:mt-10"
                onClick={handleEditClick}
              >
                Edit information
              </Button>
            )}
          </div>
        </Form>
      </Formik>
    </section>
  );
}

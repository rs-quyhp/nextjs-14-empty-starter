'use server';

export const handleLogin = async (formData: FormData) => {
  console.log('Check form data: ', formData);
  await new Promise((resolve) => setTimeout(resolve, 5000));
};

"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export async function signIn() {
  try {
    // Mutations / Database /Make fetch
  } catch (error) {
    console.log(error);
  }
}

export async function signUp(userData: SignUpParams) {
  try {
    const { email, firstName, lastName, password } = userData;
    const { account } = await createAdminClient();
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    console.log(error);
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return account.get();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

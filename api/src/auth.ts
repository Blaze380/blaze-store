import { betterAuth } from "better-auth";
import {  admin  } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/db/prisma";
export const auth = betterAuth({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
       emailAndPassword: {
        enabled: true,
        // biome-ignore lint/correctness/noUnusedFunctionParameters: <explanation>
        async sendResetPassword(data, request) {
            // Send an email to the user with a link to reset their password
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }
    },
    account:{
        accountLinking:{
            enabled:true,
            trustedProviders:["google","github"],
        },
    },
    user:{

    },
    plugins:[
        admin()
    ]
});
'use client';

import toast from "react-hot-toast";

import React from "react";
import { Alert, AlertTitle, AlertDescription } from "./alert";
import { Copy, Server } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";

interface ApiAlertProps {
    title: string;
    description: string;
    variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "Public",
    admin: "Admin"
};

const VariantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive"
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
    title,
    description,
    variant = "public"
}) => {
    const onCopy = () => {
        navigator.clipboard.writeText(description);
        toast.success("API Route Copied to clipboard.");
    }

    return (
        <Alert>
            <Server className="h-4 w-4"/>
            <AlertTitle>
                {title}
                <Badge variant={VariantMap[variant]} className="ml-2">
                    {textMap[variant]}
                </Badge>
            </AlertTitle>
            <AlertDescription className="mt-4 flex items-center justify-between text-sm">
                <code className="font-mono font-medium text-sm relative bg-muted px-[0.3rem] py-[0.2rem] rounded">
                    {description}
                </code>
                <Button variant="outline" size="icon" className="ml-2" onClick={onCopy}>
                    <Copy className="h-4 w-4"/>
                </Button>
            </AlertDescription>
        </Alert>
    )
}
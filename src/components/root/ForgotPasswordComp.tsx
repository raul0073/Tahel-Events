'use client'
import { Dispatch } from "@reduxjs/toolkit";
import labels from "../../../Labels/Entry.json";
import { Button } from "../ui/button";
import {
  CardContent,
  CardDescription
} from "../ui/card";
import { Input } from "../ui/input";
import { Fragment, SetStateAction } from 'react';
function ForgotPasswordComp( ) {
  return (
    <Fragment>

    <CardContent className="space-y-2">
    <Input type="text" placeholder="כתובת מייל" />
    <CardDescription>{labels.forgotText}</CardDescription>
      
</CardContent>

    </Fragment>
  )
}

export default ForgotPasswordComp
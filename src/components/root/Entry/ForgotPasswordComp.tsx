'use client'
import { Fragment } from 'react';
import labels from "../../../../Labels/Entry.json";
import { Button } from "../../ui/button";
import {
  CardContent,
  CardDescription
} from "../../ui/card";
import { Input } from "../../ui/input";
function ForgotPasswordComp( ) {
  return (
    <Fragment>

    <CardContent className="space-y-8">
	<div>
	<Input type="text" placeholder="כתובת מייל" />
    <CardDescription>{labels.forgotText}</CardDescription>
	</div>
    <Button className="w-full" >שלח</Button>
  </CardContent>

    </Fragment>
  )
}

export default ForgotPasswordComp

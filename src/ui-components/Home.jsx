/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function Home(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="940px"
      height="414px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Home")}
      {...rest}
    >
      <Button
        width="388px"
        position="absolute"
        border="1px SOLID rgba(0,34,102,1)"
        top="224px"
        left="319px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Book Now"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="96px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="116.18181610107422px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="73px"
        left="329px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Home"
        {...getOverrideProps(overrides, "My Home")}
      ></Text>
    </View>
  );
}

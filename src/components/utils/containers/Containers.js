import React from "react";
import { setPositionBy } from "../setPositionFunctions";
import { Flex } from "antd";

const ContainerFlex = (props) => {

    const containerStyles = {
        padding: props.padding,
        margin: props.margin,
        width: props.width || "auto",
        height: props.height || "auto",
        position: props.position || ""
    };

    const limitWidth = {
        maxWidth: "1000px",
        minWidh: "500px",
    };

    const limitHeight = {
        maxHeight: "600px",
        minHeight: "300px",
    };

    const styles = {
        ...containerStyles,
        ...props.style,
        ...(props.limitWidth ? limitWidth : {}),
        ...(props.limitHeight ? limitHeight : {}),
    };


    return (
        <Flex
            vertical={props.direction === "column"}
            justify={props.alineacionY}
            align={props.alineacionX}
            style={styles}
            onClick={props.onClick}
            id={props.idContainer}
            className={props.sizeLimit ? "flex-container-pae" : ""}
        >
            {props.children}
        </Flex>
    )
}

const Columns = (props) => {

    const [y, x] = setPositionBy("column", props.elementPosition);

    return (
        <ContainerFlex
            direction={"column"}
            alineacionX={x}
            alineacionY={y}
            {...props}
        >
            {props.children}
        </ContainerFlex>
    );
}

const Rows = (props) => {

    const [y, x] = setPositionBy("row", props.elementPosition);

    return (
        <ContainerFlex
            direction={"row"}
            alineacionX={x}
            alineacionY={y}
            {...props}
        >
            {props.children}
        </ContainerFlex>
    );
}

const ContentContainer = (props) => {

    return (
        <Columns
            padding="2rem"
            height="100%"
            width="100%"
            elementPosition="top-center"
            {...props}
        >
            {props.children}
        </Columns>
    )
}

export { Columns, Rows, ContentContainer }


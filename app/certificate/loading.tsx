"use client";
import {Spin} from "antd";
import React from "react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Spin tip="Loading ..." size="large">
            <div className="content"/>
        </Spin>
    );
}

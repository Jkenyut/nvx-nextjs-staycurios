/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Button, Modal, ConfigProvider, ModalProps } from "antd";
import { terms } from "../../utils/terms";
type TermsAndConditions = keyof typeof terms.platform.TermsAndConditions;
type PrivacyAndPolicy = keyof typeof terms.platform.PrivacyAndPolicy;

export const ModalTerms: React.FC = () => {
  const termsLaw = Object.keys(terms.platform.TermsAndConditions).map((key) => {
    return terms.platform.TermsAndConditions[key as TermsAndConditions] as {
      Title: string;
      Description: string;
    };
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Terms of Service"
        open={isModalOpen}
        onOk={handleOk}
        maskClosable={false}
        closable={false}
        width={750}
        footer={[
          <Button key="submit" type="primary" className="bg-[#1677ff]" onClick={handleOk}>
            Accept
          </Button>,
        ]}
      >
        <div className="p-2 space-y-2">
          <hr />
          <p className="text-sm antialiased font-medium tracking-wide text-slate-900">
            Effective date: April 1, 2023
          </p>
          {termsLaw.map((term) => {
            return (
              <section key={term.Title}>
                <h6 className="text-sm antialiased font-semibold tracking-wide text-slate-600">
                  {term.Title}
                </h6>
                <p className=" text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  {term.Description}
                </p>
              </section>
            );
          })}
          <hr />
        </div>
      </Modal>
    </>
  );
};

export const ModalPolicy: React.FC = () => {
  const termsLaw = Object.keys(terms.platform.PrivacyAndPolicy).map((key) => {
    return terms.platform.PrivacyAndPolicy[key as PrivacyAndPolicy] as {
      Title: string;
      Description: string;
    };
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Privacy and Policy"
        open={isModalOpen}
        onOk={handleOk}
        closable={true}
        onCancel={handleCancel}
        width={750}
        footer={[
          <Button key="submit" type="primary" className="bg-[#1677ff]" onClick={handleOk}>
            Accept
          </Button>,
        ]}
      >
        <div className="p-2 space-y-2">
          <hr />
          <p className="text-sm antialiased font-medium tracking-wide text-slate-900">
            Effective date: April 1, 2023
          </p>
          {termsLaw.map((term) => {
            return (
              <section key={term.Title}>
                <h6 className=" uppercase text-sm antialiased font-semibold tracking-wide text-slate-600">
                  {term.Title}
                </h6>
                <p className=" text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  {term.Description}
                </p>
              </section>
            );
          })}

          <hr />
        </div>
      </Modal>
    </>
  );
};

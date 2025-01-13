import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Tabs,
  Tab,
  useDisclosure,
} from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { Select, SelectSection, SelectItem } from '@nextui-org/select';

import { Listbox, ListboxItem } from '@nextui-org/react';
import { Checkbox } from '@nextui-org/checkbox';
import { Chip } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { Tooltip } from '@nextui-org/tooltip';
import { useLoaderData, useRevalidator, useNavigate } from '@remix-run/react';
import { Controller, type FieldErrors, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { queryDNS, updateDNS, Types } from '~/api';
import Editor from '~/modules/MonacoEditorComponent';
import * as _ from 'lodash';

export const loader = async () => {
  const res = await queryDNS({ userID: localStorage.getItem('userID')! });
  return res;
};

export function Page() {
  const data = useLoaderData();
  const revalidator = useRevalidator();
  const userID = localStorage.getItem('userID')!;
  const { Value: DNSValue } = data.V2rayConfigure.DNS as Types.DNS;
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { t, i18n } = useTranslation();

  const [content, setContent] = useState<string>(DNSValue);

  const handleEditorChange = _.debounce((v: string, onClose: () => void) => {
    try {
      JSON.parse(v);
      updateDNS({ userID, dns: v });
      toast.success(t('Save success'));
      revalidator.revalidate();
      onClose();
    } catch (e) {
      toast.error(t('Invalid JSON format'));
    }
    return;
  }, 1000);

  return (
    <>
      <Button
        color="primary"
        onPress={() => {
          onOpen();
        }}
      >
        <span className="i-feather-edit" /> {t('Edit')}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{t('DNS Setting')}</ModalHeader>
              <ModalBody className="flex w-full flex-col items-center justify-center">
                <Card>
                  <CardBody className="gap-8 p-4">
                    <p className="text-sm text-gray-500">
                      {t(
                        'Edit v2ray dns config, which will inject dns item when you start a proxy service',
                      )}
                    </p>
                    <Editor
                      className="h-48 w-[32rem]"
                      defaultLanguage="json"
                      defaultValue={JSON.stringify(JSON.parse(content), null, 2)}
                      onChange={(v, event) => setContent(v)}
                    />
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t('Cancel')}
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    handleEditorChange(content, onClose);
                  }}
                >
                  {t('Save')}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

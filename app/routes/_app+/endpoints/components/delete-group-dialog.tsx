import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { deleteGroup } from '~/api';
import toast, { Toaster } from 'react-hot-toast';
import { Chip } from '@nextui-org/react';
import { useLoaderData, useNavigate, useRevalidator, useFetcher } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

const DialogButton = (props: { groupID: string; groupName: string }) => {
  const revalidator = useRevalidator();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Button onPress={onOpen} isIconOnly color="primary" variant="ghost" aria-label="delete all">
        <span className="i-feather-trash" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete Endpoints Group</ModalHeader>
              <ModalBody>
                <p>
                  {props.groupName === 'local-endpoints' ? (
                    <>
                      {t('Are you sure you want to delete')}{' '}
                      <Chip color="warning" variant="bordered">
                        {props.groupName}
                      </Chip>{' '}
                      {t('Group')}?
                    </>
                  ) : (
                    <>
                      {t('Are you sure you want to delete')}{' '}
                      <Chip color="warning" variant="bordered">
                        {props.groupName}
                      </Chip>{' '}
                      {t('subscription')}?{' '}
                      {t('It would also delete the subscription item on the subscription page')}.
                    </>
                  )}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="solid" onPress={onClose}>
                  {t('KEEP IT')}
                </Button>
                <Button
                  color="danger"
                  onPress={async () => {
                    await deleteGroup({ groupID: props.groupID });
                    toast.success(`${props.groupName} ${t('Group deleted successfully')}`);
                    revalidator.revalidate();
                    onClose();
                  }}
                >
                  {t('DELETE IT')}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DialogButton;

import { Fragment } from "react";
import { SheetClose } from "../ui/sheet";

const SheetCloseWrap = ({
  onClose,
  children,
}: {
  onClose: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      {onClose ? (
        <SheetClose asChild>{children}</SheetClose>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </>
  );
};

export default SheetCloseWrap;

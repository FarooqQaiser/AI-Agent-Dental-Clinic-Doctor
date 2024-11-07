import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import Whatsapp from "../../features/whatsapp/index";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Whatsapp" }));
  }, [dispatch]);

  return <Whatsapp />;
}

export default InternalPage;

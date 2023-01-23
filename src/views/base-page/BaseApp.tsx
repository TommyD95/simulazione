import { useEffect } from "react";
import BaseLoading from "../../shared/BaseLoading";
import Header from "../../shared/Header";
import useContentNavigation from "../../shared/hooks/useContentNavigation";
import useHeaderNavigation from "../../shared/hooks/useHeaderNavigation";
import BasePath from "./BasePath";

function BaseApp() {

  const { getMenu, menus, loading } = useHeaderNavigation();
  const { content, getContent } = useContentNavigation();
  useEffect(() => {
    getMenu();
    getContent();
  }, [])

  return (
    <>
      {loading
        ? <BaseLoading />
        : <Header menus={menus} content={content}></Header>}
      <BasePath />
    </>
  );
}

export default BaseApp;
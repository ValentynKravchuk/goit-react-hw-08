import { Helmet } from "react-helmet-async";

function DocumentTitle({ children }) {
  return (
    <div>
      <Helmet>
        <title>{children}</title>
      </Helmet>
    </div>
  );
}

export default DocumentTitle;

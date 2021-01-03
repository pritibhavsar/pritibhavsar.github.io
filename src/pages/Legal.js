import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo"
import PageHeader from '../components/pageHeader/';
import LegalComponent from '../components/legal/'
// import Loader from '../components/loader/';

const Legal = () => (
  <Layout>
    <SEO title="Legal" />
    <PageHeader name={"Legal"} />
    <LegalComponent />
  </Layout>
  );

export default Legal
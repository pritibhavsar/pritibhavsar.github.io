import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo"
import AgencyBanner from '../components/home/01agencyBanner';
import PrototypeService from '../components/home/02prototypeService';
import AppServiceArea from '../components/home/03appServiceArea';
import SecurityArea from '../components/home/04securityArea';
// import Loader from '../components/loader/';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <AgencyBanner />   
    <PrototypeService /> 
    <AppServiceArea />
    <SecurityArea />
  </Layout>)

export default IndexPage

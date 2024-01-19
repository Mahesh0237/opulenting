import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { ActionIcon, Loader, Stack, Text, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { userTypeUpdate } from './zustand/UserTypeUpdate'
import { useUserAuth } from './zustand/useUserAuth'
const Counsellingpage = lazy(() => import('./pages/enquireydata/Counsellingpage'))
const Dynamicpage = lazy(() => import('./pages/Dynamicpage'))
const Usertypeupdatepage = lazy(() => import('./pages/Usertypeupdatepage'))
const Paymentpage = lazy(() => import('./pages/Paymentpage'))
const Homepage = lazy(() => import('./pages/Homepage'))
const Canadastdntvisapage = lazy(() => import('./pages/Canadastdntvisapage'))
const Loginpage = lazy(() => import('./pages/Loginpage'))
const Signuppage = lazy(() => import('./pages/Signuppage'))
const Refundpolicypage = lazy(() => import('./pages/Refundpolicypage'))
const Copyrightpage = lazy(() => import('./pages/Copyrightpage'))
const Canadaeligty = lazy(() => import('./components/Checkforeligibility/Canadaeligty'))
const Antifraudpolicypage = lazy(() => import('./pages/Antifraudpolicypage'))
const Privacypolicypage = lazy(() => import('./pages/Privacypolicypage'))
const Returnpolicypage = lazy(() => import('./pages/Returnpolicypage'))
const Education = lazy(() => import('./pages/Education'))
const Employment = lazy(() => import('./pages/Employment'))
const Contactuspage = lazy(() => import('./pages/Contactuspage'))
const Coachingpage = lazy(() => import('./pages/Coachingpage'))
const Ieltscoachingpage = lazy(() => import('./pages/Ieltscoachingpage'))
const Tofelcoachingpage = lazy(() => import('./pages/Tofelcoachingpage'))
const Visapage = lazy(() => import('./pages/Visapage'))
const Studentvisapage = lazy(() => import('./pages/Studentvisapage'))
const Australiaskilledvisa = lazy(() => import('./pages/Australiaskilledvisa'))
const Australiaskilledindependentvisa = lazy(() => import('./pages/Australiaskilledindependentvisa'))
const Australiafamilyvisa = lazy(() => import('./pages/Australiafamilyvisa'))
const Australiabusinessvisa = lazy(() => import('./pages/Australiabusinessvisa'))
const Canadaprovisionalvisa = lazy(() => import('./pages/Canadaprovisionalvisa'))
const Canadafedralskilledvisa = lazy(() => import('./pages/Canadafedralskilledvisa'))
const Canadaworkpermitvisa = lazy(() => import('./pages/Canadaworkpermitvisa'))
const Canadaopenworkpermit = lazy(() => import('./pages/Canadaopenworkpermit'))
const Germanynationalvisa = lazy(() => import('./pages/Germanynationalvisa'))
const Germanydependentvisa = lazy(() => import('./pages/Germanydependentvisa'))
const Germanyskilledjobseeker = lazy(() => import('./pages/Germanyskilledjobseeker'))
const Australiaeligty = lazy(() => import('./components/Checkforeligibility/Australiaeligty'))
const Usaeligty = lazy(() => import('./components/Checkforeligibility/Usaeligty'))
const Jobopeningincanada = lazy(() => import('./pages/Jobopeningincanada'))
const Constructionworkernewspage = lazy(() => import('./pages/Constructionworkernewspage'))
const Uscitizenshipcardnewspage = lazy(() => import('./pages/Uscitizenshipcardnewspage'))
const Australiastudentvisapage = lazy(() => import('./pages/Australiastudentvisapage'))
const Germanyvisitorvisapage = lazy(() => import('./pages/Germanyvisitorvisapage'))
const Usastudentvisa = lazy(() => import('./pages/Usastudentvisa'))
const Austriapage = lazy(() => import('./pages/Austriapage'))
const Southafricaskilledvisapage = lazy(() => import('./pages/Southafricaskilledvisapage'))
const Hongkongmigratevisa = lazy(() => import('./pages/Hongkongmigratevisa'))
const Ptetrainingpage = lazy(() => import('./pages/Ptetrainingpage'))
const Gmattrainingpage = lazy(() => import('./pages/Gmattrainingpage'))
const Gretrainingpage = lazy(() => import('./pages/Gretrainingpage'))
const Hongkongdependentvisa = lazy(() => import('./pages/Hongkongdependentvisa'))
const Businessvisapage = lazy(() => import('./pages/Businessvisapage'))
const Touristvisapage = lazy(() => import('./pages/Touristvisapage'))
const Dependentvisapage = lazy(() => import('./pages/Dependentvisapage'))
const Migratemainpage = lazy(() => import('./pages/migrate/Migratemainpage'))
const Workabroad = lazy(() => import('./pages/Workabroad'))
const Investabroad = lazy(() => import('./pages/Investabroad'))
const Visitvisapage = lazy(() => import('./pages/Visitvisapage'))
const Allproductspage = lazy(() => import('./pages/Allproductspage'))
const Norwayproduct = lazy(() => import('./pages/products/Norwayproduct'))
const Singaporeenterpasspage = lazy(() => import('./pages/products/Singaporeenterpasspage'))
const Singaporeglobalinvestorpage = lazy(() => import('./pages/products/Singaporeglobalinvestorpage'))
const FranceEubluecardpage = lazy(() => import('./pages/products/FranceEubluecardpage'))
const Irelanddependentvisapage = lazy(() => import('./pages/products/Irelanddependentvisapage'))
const Irelandfamilyimmigartionpage = lazy(() => import('./pages/products/Irelandfamilyimmigartionpage'))
const Usfamilyimmigarionpage = lazy(() => import('./pages/products/Usfamilyimmigrationpage'))
const Overseasjobspage = lazy(() => import('./pages/Overseasjobspage'))
const Recruitfromopulentuspage = lazy(() => import('./pages/Recruitfromopulentuspage'))
const Belgiumworkpermitvisapage = lazy(() => import('./pages/products/Belgiumworkpermitvisapage'))
const Denmarkdependentvisapage = lazy(() => import('./pages/products/Denmarkdependentvisapage'))
const Denmarkstudentdependentvisapage = lazy(() => import('./pages/products/Denmarkstudentdependentvisapage'))
const Switchzerlanddependentvisapage = lazy(() => import('./pages/products/Switchzerlanddependentvisapage'))
const Swedendependentvisapage = lazy(() => import('./pages/products/Swedendependentvisapage'))
const Eubluecarditalyvisapage = lazy(() => import('./pages/products/Eubluecarditalyvisapage'))
const Eubluecardbulgariavisapage = lazy(() => import('./pages/products/Eubluecardbulgariavisapage'))
const BelgiumEubluecardpage = lazy(() => import('./pages/products/BelgiumEubluecardpage'))
const NetherlandEubluecardpage = lazy(() => import('./pages/products/NetherlandEubluecardpage'))
const SwedenEubluecardpage = lazy(() => import('./pages/products/SwedenEubluecardpage'))
const HungaryEubluecardvisapage = lazy(() => import('./pages/products/HungaryEubluecardvisapage'))
const FinlandEubluecardpage = lazy(() => import('./pages/products/FinlandEubluecardpage'))
const Forgetpasswordpage = lazy(() => import('./pages/Forgetpasswordpage'))
const Eubluecardpolandvisapage = lazy(() => import('./pages/products/Eubluecardpolandvisapage'))
const UserEducationdetailspage = lazy(() => import('./pages/UserEducationdetailspage'))
const UserEmploymentdetailspage = lazy(() => import('./pages/UserEmploymentdetailspage'))
const Userenquireydatapreview = lazy(() => import('./pages/enquireydata/Userenquireydatapreview'))

const ProtectedRoute = ({ isLoggedIn, usertype }) => {
  let redirectPath;
  if (usertype) {
    redirectPath = '/'
  } else {
    redirectPath = '/signin'
  }

  if (isLoggedIn === false) {
    if (redirectPath != null) {
      return <Navigate to={redirectPath} replace />
    }
  }
  return <Outlet />
}

const AuthCheckRoute = ({ isLoggedIn, usertype }) => {
  let redirectPath;
  if (usertype) {
    redirectPath = '/'
  } else {
    // redirectPath = '/usertypeupdate'
    redirectPath = '/'
  }

  if (isLoggedIn === true) {
    if (redirectPath !== null) {
      return <Navigate to={redirectPath} replace />
    }
  }
  return <Outlet />
}

function Approuter() {

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const updateTheme = () => {
    toggleColorScheme()
  }
  const { usertype } = userTypeUpdate()
  const { isLoggedIn } = useUserAuth()
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={
          <Stack align='center' justify='center' style={{ height: "100vh" }}>
            <Loader variant="bars" color="green" />
            <Text size={15} weight={600}>Loading please wait....</Text>
          </Stack>
        }>
          <Routes>
            <Route path='/' element={<Homepage isLoggedIn={isLoggedIn} />} />
            <Route element={<AuthCheckRoute isLoggedIn={isLoggedIn} usertype={usertype} />}>
              <Route path='/signin' element={<Loginpage />} />
              <Route path='/signup' element={<Signuppage />} />
              <Route path='/forgetpassword' element={<Forgetpasswordpage />} />
            </Route>

            <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} usertype={usertype} />}>
              <Route path='/user_education_details' element={<UserEducationdetailspage />} />
              <Route path='/user_employment_details' element={<UserEmploymentdetailspage />} />
              <Route path='/usertypeupdate' element={<Usertypeupdatepage />} />
              <Route path='/education' element={<Education />} />
              <Route path='/employment' element={<Employment />} />
              <Route path='/userenquireypreview' element={<Userenquireydatapreview />} />
            </Route>

            {/* popular products */}
            < Route path='/Canadastdntvisapage' element={<Canadastdntvisapage />} />
            <Route path='/australiastudentvisapage' element={<Australiastudentvisapage />} />
            <Route path='/germanyvisitorvisa' element={<Germanyvisitorvisapage />} />
            <Route path='/canada_eligibility' element={<Canadaeligty />} />
            <Route path='/australia_eligibility' element={<Australiaeligty />} />
            <Route path="/usa_eligibility" element={<Usaeligty />} />
            {/* resources and news */}
            <Route path='/job_opening_canada' element={<Jobopeningincanada />} />
            <Route path='/construction_worker_news' element={<Constructionworkernewspage />} />
            <Route path='/uscitizenshipcard_page' element={<Uscitizenshipcardnewspage />} />
            {/* visas */}
            <Route path='/australia_skilled_independent_visa' element={<Australiaskilledindependentvisa />} />
            <Route path='/australia_family_immigration' element={<Australiafamilyvisa />} />
            <Route path='/australia_businessvisa' element={<Australiabusinessvisa />} />
            <Route path='/canada_provisionalvisa' element={<Canadaprovisionalvisa />} />
            <Route path='/canad_postgraduate_work_permit' element={<Canadaworkpermitvisa />} />
            <Route path='/canad_open_work_permit' element={<Canadaopenworkpermit />} />
            <Route path='/germany_nationalvisa' element={<Germanynationalvisa />} />
            <Route path='/germany_dependenyt_visa' element={<Germanydependentvisa />} />
            <Route path='/germanyskilled_jobseeker' element={<Germanyskilledjobseeker />} />
            <Route path='/usa_studentvisa' element={<Usastudentvisa />} />
            <Route path='/austriapage' element={<Austriapage />} />
            <Route path='/southafrica_skilled_visa' element={<Southafricaskilledvisapage />} />
            <Route path='/hongkong_quality_migrate_visa' element={<Hongkongmigratevisa />} />
            <Route path='/hingkong_dependent_visa' element={<Hongkongdependentvisa />} />
            {/* training pages */}
            <Route path='/training' element={<Coachingpage />} />
            <Route path='/IELTS_coaching_details' element={<Ieltscoachingpage />} />
            <Route path='/PTE_coaching_details' element={<Ptetrainingpage />} />
            <Route path='/TOFEL_coaching_details' element={<Tofelcoachingpage />} />
            <Route path='/GMAT_training_details' element={<Gmattrainingpage />} />
            <Route path='/GRE_training_details' element={<Gretrainingpage />} />
            {/* visas */}
            <Route path='/visapage' element={<Visapage />} />
            <Route path='/student_visa' element={<Studentvisapage />} />
            <Route path='/business_visa' element={<Businessvisapage />} />
            <Route path='tourist-visa' element={<Touristvisapage />} />
            <Route path='/dependent_visa' element={<Dependentvisapage />} />
            {/* migrate */}
            <Route path='/migrate' element={<Migratemainpage />} />
            <Route path='/workabroad' element={<Workabroad />} />
            <Route path='/Investabroad' element={<Investabroad />} />
            <Route path='/visitvisa' element={<Visitvisapage />} />

            {/* all products */}
            <Route path='/australia-skilled-regional-visa' element={<Australiaskilledvisa />} />
            <Route path='/canada_fedral_skilled_visa' element={<Canadafedralskilledvisa />} />
            <Route path='/allproducts' element={<Allproductspage />} />
            <Route path='/norwayproduct' element={<Norwayproduct />} />
            <Route path='/singaporeenterpass' element={<Singaporeenterpasspage />} />
            <Route path='/singapore_global_investor_proogram' element={<Singaporeglobalinvestorpage />} />
            <Route path='/france-eu-blue-card-france' element={<FranceEubluecardpage />} />
            <Route path='/irelanddependentvisa' element={<Irelanddependentvisapage />} />
            <Route path='/ireland_family_immigartion' element={<Irelandfamilyimmigartionpage />} />
            <Route path='/us_family_immigration' element={<Usfamilyimmigarionpage />} />
            <Route path='/belgium_work_permit_visa_page' element={<Belgiumworkpermitvisapage />} />
            <Route path='/denmark_dependent_visa' element={<Denmarkdependentvisapage />} />
            <Route path='/denmark_student_dependent_visa' element={<Denmarkstudentdependentvisapage />} />
            <Route path='/switzerland_dependent_visa' element={<Switchzerlanddependentvisapage />} />
            <Route path='/sweden_dependent_visa' element={<Swedendependentvisapage />} />
            <Route path='/Eu-bluecard_italy' element={<Eubluecarditalyvisapage />} />
            <Route path="/Eu_bluecard_bulgaria" element={<Eubluecardbulgariavisapage />} />
            <Route path='/belgium _Eu_bluecardvisa' element={<BelgiumEubluecardpage />} />
            <Route path='/netherland_Eu_bluecardvisa' element={<NetherlandEubluecardpage />} />
            <Route path='/sweden_Eu_bluecardvisa' element={<SwedenEubluecardpage />} />
            <Route path='/hungary_Eu_bluecard' element={<HungaryEubluecardvisapage />} />
            <Route path='/finland_Eu_bluecardvisa' element={<FinlandEubluecardpage />} />
            <Route path='/overseasjobs' element={<Overseasjobspage />} />
            <Route path='/recruitfromopulentus' element={<Recruitfromopulentuspage />} />
            <Route path='/Eu_bluecarad_poland' element={<Eubluecardpolandvisapage />} />

            <Route path='/refund-policy' element={<Refundpolicypage />} />
            <Route path='/copy-right' element={<Copyrightpage />} />
            <Route path='/anti_fraudpolicy' element={<Antifraudpolicypage />} />
            <Route path='/privacypolicy' element={<Privacypolicypage />} />
            <Route path='/contactus' element={<Contactuspage />} />
            <Route path='/return-policy' element={<Returnpolicypage />} />
            <Route path='/upiscan' element={<Paymentpage />} />
            {/* <Route path='/:slug' element={<Dynamicpage />} /> */}
            <Route path='/:slug' element={<Counsellingpage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <div style={{ cursor: "pointer", zIndex: 9999, position: 'fixed', bottom: "50%", right: "0px" }}>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={updateTheme}
          title={dark ? 'light mode' : 'dark mode'}
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
      </div>
    </>
  )
}

export default Approuter



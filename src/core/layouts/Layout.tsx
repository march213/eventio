import React, { Suspense } from "react";
import Head from "next/head";
import { BlitzLayout, Routes } from "@blitzjs/next";
import { AppShell, Navbar, Header, Text, Footer, Anchor } from "@mantine/core";
import { Horizontal, Vertical } from "mantine-layout-components";
import Link from "next/link";

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const thisYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>{title || "eventio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        padding="md"
        // navbar={
        //   <Navbar width={{ base: 300 }} height={500} p="xs">
        //     {/* Navbar content */}
        //   </Navbar>
        // }
        header={
          <Header height={45} p="xs">
            <Horizontal fullH>
              <Anchor underline={false} component={Link} href={Routes.Home()} color="gray.3">
                <Text fw="bold">Eventio</Text>
              </Anchor>
            </Horizontal>
          </Header>
        }
        footer={
          <Footer height={30}>
            <Horizontal fullH fullW center>
              <Text fz="xs" color="dimmed">
                &copy; copyright {thisYear}
              </Text>
            </Horizontal>
          </Footer>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Vertical fullH fullW>
          <Suspense fallback="Loading...">{children}</Suspense>
        </Vertical>
      </AppShell>
    </>
  );
};

export default Layout;

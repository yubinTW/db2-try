# db2 test

## Installation

```
npm i ibm_db
npm i -D @types/ibm_db
```

> in offline environment, you should download driver and send `IBM_DB_INSTALLER_URL` environment variable first

## Download Driver

https://public.dhe.ibm.com/ibmdl/export/pub/software/data/db2/drivers/odbc_cli/

## Environment

`IBM_DB_INSTALLER_URL`

- USE:

  - Set this environment variable to by-pass the IBM Hosted URL for downloading odbc/clidriver.

- HOW:

  - Set `IBM_DB_INSTALLER_URL` environment variable with alternate odbc/clidriver downloading URL link or with locally downloaded "tar/zipped clidriver's parent directory path.

- TIP:
  - If you don't have alternate hosting URL then, you can download the tar/zipped file of clidriver from the IBM Hosted URL and can set the `IBM_DB_INSTALLER_URL` environment variable to the downloaded "tar/zipped clidriver's" parent directory path. No need to untar/unzip the clidriver and do not change the name of downloaded file.

Set environment variable `IBM_DB_INSTALLER_URL` to your driver zipped file

```
export IBM_DB_INSTALLER_URL=~/devTool/linuxx64_odbc_cli.tar.gz
```

## Run db2 server

https://hub.docker.com/r/ibmcom/db2

```
docker run -itd --name mydb2 --privileged=true -p 50000:50000 -e LICENSE=accept -e DB2INST1_PASSWORD=password -e DBNAME=testdb ibmcom/db2
```

environment ref:

https://www.ibm.com/docs/en/db2/11.5?topic=SSEPGG_11.5.0/com.ibm.db2.luw.qb.server.doc/doc/t_install_db2CE_win_img.html

## Connection String

```
DATABASE=testdb;HOSTNAME=localhost;UID=db2inst1;PWD=password;PORT=50000;PROTOCOL=TCPIP
```

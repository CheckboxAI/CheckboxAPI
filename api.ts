import axios, { AxiosRequestConfig } from "axios";
import _ from "lodash";
import validator from "validator";
import csv from "fast-csv";
import ldapjs from "ldapjs";
import { google } from "googleapis";
import stream from "stream";
import AWS from "aws-sdk";
import https from "https";
import http from "http";
import url from "url";
import soap from "soap";
import xml2js from "xml2js";
import knex from "knex";
import FormData from "form-data";

export type Url = string;
export type FileName = string;
export type InputValue = string | number | Date;
export type OutputValue = any;
export type EnvValue = string;

export type DocMetaFields = {
  fileName: string;
  fileUrl: string;
};

export type DocMetadata = {
  signed?: DocMetaFields;
  pdf?: DocMetaFields;
  docx?: DocMetaFields;
};

export type ESignedDocument = {
  name: string;
  file: string;
};


export interface ESignedDocuments {
  page: string;
  status: string;
  original: string;
  signedDocuments: ESignedDocument[];
}

export type LookupVariable = {
  name: string;
  value: any;
  type: string;
  status: string;
  error: string;
};

export type LookupResult = {
  keyValue: string;
  foundVariables: LookupVariable[];
};

export type LookupPaginatedResponse = {
  payload: LookupResult[];
  totalCount: number;
};

export const api = {
  getVariable: (name: string): InputValue => { return "" },

  getDocumentMetadata: (name: string): DocMetadata => {
    return {};
  },

  getFileURL: (name: FileName): Url[] => {
    return [];
  },

  getPrivateFileURL: (name: FileName): Url[] => {
    return [];
  },

  getESignInfo: (): ESignedDocuments[] => {
    return ;
  },

  overwriteVariable: (name: string, value: InputValue): void => {},

  env: (name: string): EnvValue | undefined => {
    return "";
  },

  lookupVariables: async (
    appCode: string,
    variables: string[],
    targetTeams: string[]
  ): Promise<LookupPaginatedResponse> => {
    return {
      payload: [],
      totalCount: 0,
    };
  },

  setVariable: (name: string, value: OutputValue): void => {},

  makeRequest: (config: AxiosRequestConfig<any>) => axios(config),

  knex,
  lodash: _,
  validator,
  ldapjs,
  google,
  csv,
  AWS,
  https,
  http,
  url,
  stream,
  soap,
  xml2js,
  FormData,
};

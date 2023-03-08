import * as googleapis from 'googleapis';
import * as axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import _ from 'lodash';
import validator from 'validator';
import csv from 'fast-csv';
import ldapjs from 'ldapjs';
import stream from 'stream';
import AWS from 'aws-sdk';
import https from 'https';
import http from 'http';
import url from 'url';
import soap from 'soap';
import xml2js from 'xml2js';
import knex from 'knex';
import FormData from 'form-data';

type Url = string;
type FileName = string;
type InputValue = string | number | Date;
type OutputValue = any;
type EnvValue = string;
type DocMetaFields = {
    fileName: string;
    fileUrl: string;
};
type DocMetadata = {
    signed?: DocMetaFields;
    pdf?: DocMetaFields;
    docx?: DocMetaFields;
};
type ESignedDocument = {
    name: string;
    file: string;
};
interface ESignedDocuments {
    page: string;
    status: string;
    original: string;
    signedDocuments: ESignedDocument[];
}
type LookupVariable = {
    name: string;
    value: any;
    type: string;
    status: string;
    error: string;
};
type LookupResult = {
    keyValue: string;
    foundVariables: LookupVariable[];
};
type LookupPaginatedResponse = {
    payload: LookupResult[];
    totalCount: number;
};
declare const api: {
    getVariable: (name: string) => InputValue;
    getDocumentMetadata: (name: string) => DocMetadata;
    getFileURL: (name: FileName) => Url[];
    getPrivateFileURL: (name: FileName) => Url[];
    getESignInfo: () => ESignedDocuments[];
    overwriteVariable: (name: string, value: InputValue) => void;
    env: (name: string) => EnvValue | undefined;
    lookupVariables: (appCode: string, variables: string[], targetTeams: string[]) => Promise<LookupPaginatedResponse>;
    setVariable: (name: string, value: OutputValue) => void;
    makeRequest: (config: AxiosRequestConfig<any>) => axios.AxiosPromise<any>;
    knex: typeof knex;
    lodash: _.LoDashStatic;
    validator: typeof validator;
    ldapjs: typeof ldapjs;
    google: googleapis.GoogleApis;
    csv: typeof csv;
    AWS: typeof AWS;
    https: typeof https;
    http: typeof http;
    url: typeof url;
    stream: typeof stream;
    soap: typeof soap;
    xml2js: typeof xml2js;
    FormData: typeof FormData;
};

export { DocMetaFields, DocMetadata, ESignedDocument, ESignedDocuments, EnvValue, FileName, InputValue, LookupPaginatedResponse, LookupResult, LookupVariable, OutputValue, Url, api };

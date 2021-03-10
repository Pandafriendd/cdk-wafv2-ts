#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkWafv2TsStack } from '../lib/cdk-wafv2-ts-stack';

const app = new cdk.App();
new CdkWafv2TsStack(app, 'CdkWafv2TsStack');

import * as cdk from '@aws-cdk/core';

import { CfnWebACL } from '@aws-cdk/aws-wafv2';

export class CdkWafv2TsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const basicRule: CfnWebACL.RuleProperty = {
            name: 'AWS-AWSManagedRulesCommonRuleSet',
            priority: 0,
            statement: {
                managedRuleGroupStatement: {
                    vendorName: 'AWS',
                    name: 'AWSManagedRulesCommonRuleSet',
                },
            },
            overrideAction: {
                count: {},
            },
            visibilityConfig: {
                cloudWatchMetricsEnabled: true,
                sampledRequestsEnabled: true,
                metricName: 'AWS-AWSManagedRulesCommonRuleSet',
            },
        };

        const webACL: CfnWebACL = new CfnWebACL(this, 'WebAcl', {
            defaultAction: {
                allow: {},
            },
            scope: 'REGIONAL',
            visibilityConfig: {
                cloudWatchMetricsEnabled: true,
                metricName: "test-waf-metric",
                sampledRequestsEnabled: true,
            },
            rules: [basicRule],
        });
  }
}

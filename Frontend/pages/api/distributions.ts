import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json([
    {
      distType: "discrete",
      name: "Uniform",
      output: {
        name: "support",
        type: "float",
        upper: "inputs[upper]",
        lower: "inputs[lower]",
        upperBound: "open",
        lowerBound: "open",
        default: 0,
        optional: false,
      },
      inputs: [
        {
          name: "lower",
          type: "float",
          upper: "inf",
          lower: "inf",
          upperBound: "open",
          lowerBound: "open",
          default: 0,
          optional: false,
        },
        {
          name: "upper",
          type: "float",
          upper: "inf",
          lower: "inf",
          upperBound: "open",
          lowerBound: "open",
          default: 1,
          optional: false,
        },
      ],
      description: "lorem ipsum",
      pymcdocsurl:
        "https://www.pymc.io/projects/docs/en/stable/api/distributions/generated/pymc.Uniform.html",
      image:
        "https://www.pymc.io/projects/docs/en/stable/_images/pymc-Uniform-1.png",
    },

    {
      distType: "discrete",
      name: "Normal",
      output: {
        name: "support",
        type: "float",
        upper: "inputs[upper]",
        lower: "inputs[lower]",
        upperBound: "open",
        lowerBound: "open",
        default: 0,
        optional: false,
      },
      inputs: [
        {
          name: "mu",
          type: "float",
          upper: "inf",
          lower: "inf",
          upperBound: "open",
          lowerBound: "open",
          default: 0,
          optional: false,
        },
        {
          name: "sigma",
          type: "float",
          upper: "inf",
          lower: "inf",
          upperBound: "open",
          lowerBound: "open",
          default: false,
          optional: true,
        },
        {
          name: "tau",
          type: "float",
          upper: "inf",
          lower: "inf",
          upperBound: "open",
          lowerBound: "open",
          default: false,
          optional: true,
        },
      ],
      description: "lorem ipsum",
      pymcdocsurl:
        "https://www.pymc.io/projects/docs/en/stable/api/distributions/generated/pymc.Normal.html",
      image:
        "https://www.pymc.io/projects/docs/en/stable/_images/pymc-Normal-1.png",
    },

    {
      distType: "discrete",
      name: "TestInf Open",
      output: {
        name: "support",
        type: "float",
        upper: "inf",
        lower: "inf",
        upperBound: "open",
        lowerBound: "open",
        default: 0,
        optional: false,
      },
      inputs: [
        {
          name: "lower",
          type: "float",
          upper: "inf",
          lower: "inf",
          upperBound: "open",
          lowerBound: "open",
          default: 0,
          optional: false,
        },
      ],
      description: "lorem ipsum",
      pymcdocsurl:
        "https://www.pymc.io/projects/docs/en/stable/api/distributions/generated/pymc.Uniform.html",
      image:
        "https://www.pymc.io/projects/docs/en/stable/_images/pymc-Uniform-1.png",
    },

    {
      distType: "discrete",
      name: "TestInf Closed",
      output: {
        name: "support",
        type: "float",
        upper: "inf",
        lower: "inf",
        upperBound: "closed",
        lowerBound: "closed",
        default: 0,
        optional: false,
      },
      inputs: [
        {
          name: "lower",
          type: "float",
          upper: "inf",
          lower: "inf",
          upperBound: "closed",
          lowerBound: "closed",
          default: 0,
          optional: false,
        },
      ],
      description: "lorem ipsum",
      pymcdocsurl:
        "https://www.pymc.io/projects/docs/en/stable/api/distributions/generated/pymc.Uniform.html",
      image:
        "https://www.pymc.io/projects/docs/en/stable/_images/pymc-Uniform-1.png",
    },
  ]);
}

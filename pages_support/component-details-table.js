import React from "react";

import { Table } from "./table";

export function ComponentDetailsTable({ name, ...props }) {
  return (
    <Table {...props}>
      <tbody>
        <tr>
          <td>
            <a
              target="_blank"
              href={`https://github.com/planningcenter/design/blob/master/cypress/integration/${name}_spec.js`}
            >
              Specification
            </a>
          </td>
          <td>
            <a
              target="_blank"
              href={`https://github.com/planningcenter/design/tree/master/planningcenter/${name}/extension`}
            >
              Extension
            </a>
          </td>
          <td>
            <a
              target="_blank"
              href={`https://github.com/planningcenter/design/blob/master/planningcenter/components/src/composed-${name}.js`}
            >
              Composition
            </a>
          </td>
          <td>
            Implementation{" "}
            <a
              target="_blank"
              href={`https://github.com/planningcenter/design/blob/master/planningcenter/${name}/css/${name}.css`}
            >
              CSS
            </a>{" "}
            <a
              target="_blank"
              href={`https://github.com/planningcenter/design/blob/master/planningcenter/${name}/src/${name}.js`}
            >
              React
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

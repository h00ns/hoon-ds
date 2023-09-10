import styled from "@emotion/styled";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import { gray, primary } from "../../styles/Color";

interface Props extends HTMLAttributes<HTMLDivElement> {
  readonly labels: LabelItem[];
  readonly data: any[];
  readonly gridTemplateColumns: string;
}

type LabelItem = {
  label: string;
  value: string;
};

const Table = (
  { labels, data, gridTemplateColumns, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Component ref={ref} {...htmlAttributes}>
      <Head style={{ gridTemplateColumns }}>
        {labels.map((label, idx) => (
          <Label key={idx}>{label.label}</Label>
        ))}
      </Head>

      <Body>
        {data.map((item: any, idx: number) => (
          <Row style={{ gridTemplateColumns }} key={idx}>
            {labels.map((label, idx) => (
              <RowItem key={idx}>{item[label.value]}</RowItem>
            ))}
          </Row>
        ))}
      </Body>
    </Component>
  );
};

const Component = styled.div``;

const Head = styled.div`
  border: 1px solid ${gray.gray3};

  display: grid;
`;

const Label = styled.div`
  padding: 12px;
  font-size: 14px;
  line-height: 20px;
  color: ${primary.gray};
`;

const Body = styled.div`
  border: 1px solid ${gray.gray3};
  border-top: none;
`;

const Row = styled.div`
  border-bottom: 1px solid ${gray.gray3};
  cursor: pointer;

  display: grid;

  &:hover {
    background: ${gray.gray1};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

const RowItem = styled.div`
  padding: 12px;
  font-size: 14px;
  line-height: 20px;

  border-right: 1px solid ${gray.gray3};

  &:last-of-type {
    border-right: none;
  }
`;

/**
 *  @Component Table
 *  @props labels - 테이블 header에 표시될 라벨들 { label: string, value: string }[]
 *  @props data - 테이블 row에 표시될 data들 {any}
 *  @props gridTemplateColumns - 테이블의 컬럼 너비 {string}
 */
export default forwardRef(Table);

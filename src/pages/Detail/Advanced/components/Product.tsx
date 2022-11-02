import React from 'react';
import { Col, Row, Card } from 'tdesign-react';
import ProductCard from './ProductCard';
import Style from '../index.module.less';

const Product = () => (
  <Card title='产品目录' className={Style.cardBox} header>
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={12} xl={4}>
          <ProductCard
            title='Credit Risk Verification'
            tags={['Risk Scoring', 'Pattern Detection', 'Cross Comparison']}
            desc='No Credit Risk Found'
            percent='100%'
            Icon='creditcard'
            progress={100}
            trackColor='#D4E3FC'
          />
        </Col>
        <Col xs={12} xl={4}>
          <ProductCard
            title='Profile Analysis'
            tags={['Predictive','Screening']}
            desc='User has low likelihood of fraud.'
            percent='100%'
            Icon='user'
            progress={100}
            trackColor='#D4E3FC'
          />
        </Col>
        <Col xs={12} xl={4}>
          <ProductCard
            title='Flagged'
            tags={['Manual Verification']}
            desc='Suspicious pattern found. Manual verification required.'
            percent='80%'
            Icon='flag'
            progress={80}
            color='#E24D59'
            trackColor='#FCD4D4'
          />
        </Col>
      </Row>
    </div>
  </Card>
);

export default React.memo(Product);

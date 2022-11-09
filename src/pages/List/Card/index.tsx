import React, { useEffect } from 'react';
import { Row, Col, Button, Input, Pagination, Loading } from 'tdesign-react';
import { SearchIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListCard, clearPageState, getList, switchPageLoading } from 'modules/list/card';
import ProductCard from './components/ProductCard';
import { PageInfo } from 'tdesign-react/es/pagination/type';
import Style from './index.module.less';
import { IProduct } from 'services/product';

export const daat:IProduct[] = [
  {
    name:"Profiling & Segmentation",
    banner: "",
    description: "Perform profilling and segmentation using k-means.",
    index: 0,
    isSetup: true,
    type: 1,
  },
  {
    name:"Risk Scoring",
    banner: "",
    description: "Compute risk scores.",
    index: 0,
    isSetup: true,
    type: 1,
  },
  {
    name:"Screening & Analysis",
    banner: "",
    description: "Analyze user information.",
    index: 0,
    isSetup: true,
    type: 1,
  },
  {
    name:"Pattern Detection",
    banner: "",
    description: "Detects anormality from data",
    index: 0,
    isSetup: true,
    type: 1,
  },]

const CardList = () => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListCard);

  const pageInit = async () => {
    await dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: 1,
      }),
    );
    await dispatch(switchPageLoading(false));
  };

  useEffect(() => {
    pageInit();
    return () => {
      clearPageState();
    };
  }, []);

  const onChange = async ({ current, pageSize }: PageInfo) => {
    await dispatch(
      getList({
        pageSize,
        current,
      }),
    );
  };

  const handlePageSizeChange = async (pageSize: number, { current }: PageInfo) => {
    await dispatch(
      getList({
        pageSize,
        current,
      }),
    );
  };

  return (
    <div>
      <div className={Style.toolBar}>
        <Button>Add Algorithm</Button>
        <Input className={Style.search} suffixIcon={<SearchIcon />} placeholder='Search for an algorithm' />
      </div>
      {pageState.pageLoading ? (
        <div className={Style.loading}>
          <Loading text='Loading...' loading size='large' />
        </div>
      ) : (
        <>
          <div className={Style.cardList}>
            <Row gutter={[16, 12]}>
              {daat.map((product, index) => (
                <Col key={index} span={6} lg={3}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </div>
          <Pagination
            className={Style.pagination}
            total={1}
            pageSizeOptions={[12, 24, 36]}
            pageSize={pageState.pageSize}
            onChange={onChange}
            onPageSizeChange={handlePageSizeChange}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(CardList);

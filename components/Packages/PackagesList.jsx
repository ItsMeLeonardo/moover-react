import { useState } from "react";
import { Input, Col, Spacer } from "@nextui-org/react";

import { useMapDirection } from "../../hooks/useMapDirection";

import ModalToPolyline from "./ModalToPolyline";
import PackagesListRow from "./PackageListRow";
import PackagesListHeader from "./PackageListHeader";

export default function PackagesList({ orders = [] } = {}) {
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { getDirections, data } = useMapDirection();

  const handleChange = (event) => {
    const keyword = event.target.value;
    if (!keyword) return setFilteredOrders(orders);
    const filtered = orders.filter(({ client }) => {
      const email = client.email.toLowerCase();
      return email.includes(keyword.toLowerCase());
    });
    setFilteredOrders(filtered);
  };

  const handleClick = async ({ from, to }) => {
    await getDirections({ from, to });
    setIsOpenModal(true);
  };

  return (
    <>
      {data && (
        <ModalToPolyline
          visible={isOpenModal}
          setVisible={setIsOpenModal}
          coords={data[0].geometry.coordinates}
        />
      )}
      <Col css={{ overflow: "hidden", p: ".5rem .25rem" }}>
        <Input
          placeholder="Find by email"
          type="search"
          bordered
          color="secondary"
          helperText="min 3 characters"
          name="keyword"
          id="SearchInput"
          arial-label="Search"
          css={{ bg: "#333", w: "100%", maxW: "420px" }}
          onChange={handleChange}
        />
        <Spacer y={1.5} />
        <PackagesListHeader />
        <Spacer y={0.25} />
        <section>
          {filteredOrders.map((order) => (
            <PackagesListRow
              key={order.id}
              onClick={handleClick}
              order={order}
            />
          ))}
        </section>
      </Col>
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          gap: 0.75rem;
        }
      `}</style>
    </>
  );
}

import React, { useState }  from "react";
import ServiceCard from "./ServiceCard";
import Modal from "./Modal";
import Loader from "./Loader";
  

  
const ServiceSession = ({services}) =>{
    const [modal,setModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    function handleModalChange(id,title){
        setModalType(id);
        setModal(!modal);
        setModalTitle(title);
    }

    return(
        
            <section className="relative w-full h-full mb-5" id="services">
                <h2 className="text-center text-4xl font-bold text-textLightActive dark:text-textDarkActive mt-4 mb-8 md:mb-12">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-6xl">S</span>
                    ervices
                </h2>
                { services.length != 0 ? <div className="grid md:grid-cols-3 grid-cols-1 gap-20 md:gap-40">
                    {
                        services.map(
                            (service)=><ServiceCard key={service.id} setModal={()=>handleModalChange(service.id,service.title)} title={service.title} imgUrl={service.imageUrl} />
                        )
                    }
                    </div> : <div className="w-full h-full flex items-center justify-center"><Loader/></div>
                }
                {
                    modal && <Modal closeModal={()=>handleModalChange('')}>
                        <h2 className="text-white text-left text-xl mt-5">{
                            `Pour ${modalTitle}, voici ce que je vous propose:`
                        }</h2>
                        <ul className="list-disc pl-2 text-textLightActive dark:text-textDarkInactive text-base sm:text-lg lg:text-xl">
                        {
                            services.find((service) => service.id == modalType).content.map((serviceItem,index)=><li key={index}>{serviceItem}</li>)
                        }
                        </ul>
                        
                    </Modal>
                }
            </section>
            
        
    );
}

export default ServiceSession;
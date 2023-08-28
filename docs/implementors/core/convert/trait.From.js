(function() {var implementors = {
"burn_candle":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Device&gt; for <a class=\"enum\" href=\"burn_candle/enum.CandleDevice.html\" title=\"enum burn_candle::CandleDevice\">CandleDevice</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"burn_candle/enum.CandleDevice.html\" title=\"enum burn_candle::CandleDevice\">CandleDevice</a>&gt; for Device"]],
"burn_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"burn_core/module/struct.ParamId.html\" title=\"struct burn_core::module::ParamId\">ParamId</a>"],["impl&lt;B: <a class=\"trait\" href=\"burn_core/tensor/backend/trait.Backend.html\" title=\"trait burn_core::tensor::backend::Backend\">Backend</a>, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"burn_core/tensor/struct.Tensor.html\" title=\"struct burn_core::tensor::Tensor\">Tensor</a>&lt;B, D, <a class=\"struct\" href=\"burn_core/tensor/struct.Float.html\" title=\"struct burn_core::tensor::Float\">Float</a>&gt;&gt; for <a class=\"struct\" href=\"burn_core/module/struct.Param.html\" title=\"struct burn_core::module::Param\">Param</a>&lt;<a class=\"struct\" href=\"burn_core/tensor/struct.Tensor.html\" title=\"struct burn_core::tensor::Tensor\">Tensor</a>&lt;B, D&gt;&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"burn_core/lr_scheduler/constant/struct.ConstantLR.html\" title=\"struct burn_core::lr_scheduler::constant::ConstantLR\">ConstantLR</a>"],["impl&lt;O, B, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;O&gt; for <a class=\"struct\" href=\"burn_core/optim/adaptor/struct.OptimizerAdaptor.html\" title=\"struct burn_core::optim::adaptor::OptimizerAdaptor\">OptimizerAdaptor</a>&lt;O, M, B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"burn_core/tensor/backend/trait.ADBackend.html\" title=\"trait burn_core::tensor::backend::ADBackend\">ADBackend</a>,\n    M: <a class=\"trait\" href=\"burn_core/module/trait.ADModule.html\" title=\"trait burn_core::module::ADModule\">ADModule</a>&lt;B&gt;,\n    O: <a class=\"trait\" href=\"burn_core/optim/trait.SimpleOptimizer.html\" title=\"trait burn_core::optim::SimpleOptimizer\">SimpleOptimizer</a>&lt;B::<a class=\"associatedtype\" href=\"burn_core/tensor/backend/trait.ADBackend.html#associatedtype.InnerBackend\" title=\"type burn_core::tensor::backend::ADBackend::InnerBackend\">InnerBackend</a>&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"burn_core/module/struct.ParamId.html\" title=\"struct burn_core::module::ParamId\">ParamId</a>"]],
"burn_dataset":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/r2d2/0.8/r2d2/struct.Error.html\" title=\"struct r2d2::Error\">Error</a>&gt; for <a class=\"enum\" href=\"burn_dataset/enum.SqliteDatasetError.html\" title=\"enum burn_dataset::SqliteDatasetError\">SqliteDatasetError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"burn_dataset/enum.SqliteDatasetError.html\" title=\"enum burn_dataset::SqliteDatasetError\">SqliteDatasetError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"burn_dataset/enum.SqliteDatasetError.html\" title=\"enum burn_dataset::SqliteDatasetError\">SqliteDatasetError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"burn_dataset/enum.SqliteDatasetError.html\" title=\"enum burn_dataset::SqliteDatasetError\">SqliteDatasetError</a>&gt; for <a class=\"enum\" href=\"burn_dataset/source/huggingface/enum.ImporterError.html\" title=\"enum burn_dataset::source::huggingface::ImporterError\">ImporterError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"burn_dataset/enum.SqliteDatasetError.html\" title=\"enum burn_dataset::SqliteDatasetError\">SqliteDatasetError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"burn_dataset/enum.SqliteDatasetError.html\" title=\"enum burn_dataset::SqliteDatasetError\">SqliteDatasetError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&lt;Writable&gt;&gt; for <a class=\"enum\" href=\"burn_dataset/enum.SqliteDatasetError.html\" title=\"enum burn_dataset::SqliteDatasetError\">SqliteDatasetError</a>"]],
"burn_tch":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"burn_tch/enum.TchDevice.html\" title=\"enum burn_tch::TchDevice\">TchDevice</a>&gt; for Device"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Device&gt; for <a class=\"enum\" href=\"burn_tch/enum.TchDevice.html\" title=\"enum burn_tch::TchDevice\">TchDevice</a>"],["impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"burn_tensor/tensor/shape/struct.Shape.html\" title=\"struct burn_tensor::tensor::shape::Shape\">Shape</a>&lt;D&gt;&gt; for <a class=\"struct\" href=\"burn_tch/struct.TchShape.html\" title=\"struct burn_tch::TchShape\">TchShape</a>&lt;D&gt;"]],
"burn_tensor":[["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"burn_tensor/struct.DataSerialize.html\" title=\"struct burn_tensor::DataSerialize\">DataSerialize</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Data.html\" title=\"struct burn_tensor::Data\">Data</a>&lt;E, D&gt;"],["impl&lt;B: <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>, ND: <a class=\"trait\" href=\"burn_tensor/trait.NamedDims.html\" title=\"trait burn_tensor::NamedDims\">NamedDims</a>&lt;B, Tensor = <a class=\"struct\" href=\"burn_tensor/struct.Tensor.html\" title=\"struct burn_tensor::Tensor\">Tensor</a>&lt;B, D&gt;&gt;, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"burn_tensor/struct.NamedTensor.html\" title=\"struct burn_tensor::NamedTensor\">NamedTensor</a>&lt;B, ND&gt;&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Tensor.html\" title=\"struct burn_tensor::Tensor\">Tensor</a>&lt;B, D&gt;"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, const A: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">[E; B]</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">A</a>]&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Data.html\" title=\"struct burn_tensor::Data\">Data</a>&lt;E, 2&gt;"],["impl&lt;B: <a class=\"trait\" href=\"burn_tensor/backend/trait.Backend.html\" title=\"trait burn_tensor::backend::Backend\">Backend</a>, ND: <a class=\"trait\" href=\"burn_tensor/trait.NamedDims.html\" title=\"trait burn_tensor::NamedDims\">NamedDims</a>&lt;B, Tensor = <a class=\"struct\" href=\"burn_tensor/struct.Tensor.html\" title=\"struct burn_tensor::Tensor\">Tensor</a>&lt;B, D&gt;&gt;, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"burn_tensor/struct.Tensor.html\" title=\"struct burn_tensor::Tensor\">Tensor</a>&lt;B, D, <a class=\"struct\" href=\"burn_tensor/struct.Float.html\" title=\"struct burn_tensor::Float\">Float</a>&gt;&gt; for <a class=\"struct\" href=\"burn_tensor/struct.NamedTensor.html\" title=\"struct burn_tensor::NamedTensor\">NamedTensor</a>&lt;B, ND&gt;"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.slice.html\">[E]</a>&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Data.html\" title=\"struct burn_tensor::Data\">Data</a>&lt;E, 1&gt;"],["impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">D</a>]&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Shape.html\" title=\"struct burn_tensor::Shape\">Shape</a>&lt;D&gt;"],["impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Shape.html\" title=\"struct burn_tensor::Shape\">Shape</a>&lt;D&gt;"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, const A: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">[E; A]</a>&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Data.html\" title=\"struct burn_tensor::Data\">Data</a>&lt;E, 1&gt;"],["impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.i64.html\">i64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Shape.html\" title=\"struct burn_tensor::Shape\">Shape</a>&lt;D&gt;"],["impl&lt;E, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"burn_tensor/struct.DataSerialize.html\" title=\"struct burn_tensor::DataSerialize\">DataSerialize</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Data.html\" title=\"struct burn_tensor::Data\">Data</a>&lt;E, D&gt;"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, const A: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, const C: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">[E; C]</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">B</a>]; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">A</a>]&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Data.html\" title=\"struct burn_tensor::Data\">Data</a>&lt;E, 3&gt;"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, const A: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, const C: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[[[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">[E; D]</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">C</a>]; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">B</a>]; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.array.html\">A</a>]&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Data.html\" title=\"struct burn_tensor::Data\">Data</a>&lt;E, 4&gt;"],["impl&lt;const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.0/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.72.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"burn_tensor/struct.Shape.html\" title=\"struct burn_tensor::Shape\">Shape</a>&lt;D&gt;"]],
"burn_train":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"burn_train/struct.LearnerItem.html\" title=\"struct burn_train::LearnerItem\">LearnerItem</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"burn_train/metric/dashboard/struct.TrainingProgress.html\" title=\"struct burn_train::metric::dashboard::TrainingProgress\">TrainingProgress</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"burn_train/struct.LearnerItem.html\" title=\"struct burn_train::LearnerItem\">LearnerItem</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"burn_train/metric/struct.MetricMetadata.html\" title=\"struct burn_train::metric::MetricMetadata\">MetricMetadata</a>"]],
"mnist_inference_web":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"mnist_inference_web/web/struct.Mnist.html\" title=\"struct mnist_inference_web::web::Mnist\">Mnist</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/wasm-bindgen/0.2/wasm_bindgen/struct.JsValue.html\" title=\"struct wasm_bindgen::JsValue\">JsValue</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()